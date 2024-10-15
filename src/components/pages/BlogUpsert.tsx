/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import FloatInput from '../organisms/FloatInput';
import { Controller, useForm } from 'react-hook-form';
import RichTextEditor from '../atoms/textEditor';
import { Button } from 'antd';
import Text from '../atoms/commonText';
import UploadFiles from '../atoms/upload';
import { BlogsDataType } from '../../data/types';
import { useUploadImageMutation } from '../../redux/slice/loginSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { showToast } from '../../utils/toast';
import {
  useCreateBlogMutation,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
} from '../../redux/slice/blogSlice';

const BlogUpsert = () => {
  const nevigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const [content, setContent] = useState<string>('');
  const [create, { isLoading: createLoading }] = useCreateBlogMutation({});
  const [update, { isLoading: updateLoading }] = useUpdateBlogMutation({});
  const [UploadImage, { isLoading: uploadLoading }] = useUploadImageMutation();
  const { data } = useGetBlogByIdQuery(id, {
    skip: !id,
  });

  const blogData = data?.data;

  const loading = uploadLoading || createLoading || updateLoading;

  const {
    formState: { errors },
    handleSubmit,
    setValue,
    control,
  } = useForm<BlogsDataType>({
    mode: 'onTouched',
  });

  useEffect(() => {
    if (id && blogData) {
      setValue('title', blogData?.title);
      setValue('subtitle', blogData?.subtitle);
      setValue('image', blogData?.image?.url);
      setContent(blogData?.content || '');
    }
  }, [id, blogData]);

  const onSubmit = async (data: BlogsDataType) => {
    const { image, ...newData } = data;

    const formData = new FormData();
    formData.append('profile', image);

    try {
      let profileImage;
      if (image) {
        const res = await UploadImage({ profile: formData });

        const data = res?.data?.data;
        profileImage = {
          url: data?.url,
          public_id: data?.public_id,
        };
      }

      const formattedData = {
        ...newData,
        image: profileImage || blogData?.image || {},
        content: content,
      };
      try {
        const res = id
          ? await update({
              id: id,
              data: formattedData,
            })
          : await create(formattedData);
        nevigate('/blogs');
        showToast({
          type: 'success',
          message: `Blog ${id ? 'Updated' : 'Created'} Successfully`,
        });

        console.log(res, 'res');
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-full p-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between pr-2">
          <Text containerTag="h1" className="text-lg font-medium text-blackColor">
            {id ? 'Update Blog' : 'Create Blog'}
          </Text>
        </div>
        <div className="w-[60%] flex flex-col gap-4">
          <Controller
            name="title"
            control={control}
            rules={{
              required: `Title is Required`,
            }}
            render={({ field }) => (
              <FloatInput
                label="Title"
                type="text"
                name="title"
                field={field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="subtitle"
            control={control}
            rules={{
              required: `Subtitle is Required`,
            }}
            render={({ field }) => (
              <FloatInput
                label="Subtitle"
                type="text"
                name="subtitle"
                field={field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <UploadFiles
                title="image :"
                field={field}
                accept="image/*"
                errors={errors}
                required
              />
            )}
          />
        </div>

        <RichTextEditor onChange={value => setContent(value)} value={content} />

        <div className="flex items-end justify-end my-6">
          <Button
            size="large"
            htmlType="submit"
            type="primary"
            disabled={loading}
            loading={loading}
          >
            {id ? 'Update Blog' : 'Add Blog'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BlogUpsert;
