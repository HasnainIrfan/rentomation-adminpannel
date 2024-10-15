/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useState } from 'react';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import { toast } from 'react-toastify';
import Text from '../commonText';
import React from 'react';
import Model from '../model';
import { DocumentUpload, Trash } from 'iconsax-react';

type PropsTypes = {
  title: string;
  field: any;
  accept?: string;
  labelInCol?: boolean;
  required?: boolean;
  errors?: any;
};

function UploadFiles({ field, accept, errors }: PropsTypes) {
  const { Dragger } = Upload;
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleFileUpload = async (e: any) => {
    if (isValid && e.fileList && e.fileList.length > 0) {
      const originFile = e.fileList[0].originFileObj;
      field.onChange(originFile);
    }
  };

  const handlePreview = async (file: UploadFile) => {
    if (file.type && file.type.startsWith('video/')) {
      const videoUrl = URL.createObjectURL(file as any);
      if (isPreview) {
        URL.revokeObjectURL(isPreview);
      }
      setIsPreview(videoUrl);
      setPreviewOpen(true);
    } else {
      if (isPreview) {
        URL.revokeObjectURL(isPreview);
      }
      setIsPreview(URL.createObjectURL(file as any));
      setPreviewOpen(true);
    }
  };

  const handlePreviewOld = () => {
    setIsPreview(field.value);
    setPreviewOpen(true);
  };

  const handleClose = () => {
    setPreviewOpen(false);
    setIsPreview('');
  };

  const DraggerProps: UploadProps = {
    name: 'file',
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    accept: accept || 'image/*',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload: (file: UploadFile) => {
      let isValidFile = false;
      if (file.type) {
        isValidFile = file.type.startsWith('image/');
        if (!isValidFile) {
          toast.error('You can only upload image files!');
        }
      }
      setIsValid(isValidFile);
      return isValidFile;
    },
  };

  return (
    <div className={'w-full'}>
      {!field.value || typeof field.value === 'object' ? (
        <Dragger
          {...DraggerProps}
          listType="picture"
          maxCount={1}
          className={`flex items-center flex-col ${
            errors && errors[field.name] && 'upload-files-error'
          }`}
          onChange={handleFileUpload}
          onPreview={handlePreview}
          fileList={field.value ? [field.value] : []}
          onRemove={() => field.onChange('')}
        >
          <div className="flex items-center justify-center gap-6">
            <DocumentUpload />
            <Text
              containerTag="h6"
              className="sm:text-xs text-[10px] text-grayColor2 font-medium"
            >
              Click or drag file to this area to upload
            </Text>
          </div>
        </Dragger>
      ) : (
        <div className="relative w-full flex items-center justify-center">
          <div
            className="w-full border border-dashed border-lightGray2 px-3 py-3 rounded-10 hover:border-secondary"
            onClick={handlePreviewOld}
          >
            <div className="relative w-[60px] h-[50px] border border-lightGray rounded-sm">
              <img src={field.value} alt="preview" />
            </div>
          </div>
          <div
            className="absolute right-3 cursor-pointer hover:bg-lightGray p-[2px]"
            onClick={() => {
              field.onChange('');
              setIsPreview('');
            }}
          >
            <Trash />
          </div>
        </div>
      )}

      {errors && errors[field.name] && (
        <Text containerTag="h6" className="text-red text-xs mt-1 ml-1 font-semibold">
          {errors[field.name].message}
        </Text>
      )}

      <Model title={'Image Preview'} open={previewOpen} handleClose={handleClose}>
        <div className="relative w-full h-[300px] object-cover rounded overflow-hidden">
          <img src={isPreview} alt="preview" width={400} height={400} />
        </div>
      </Model>
    </div>
  );
}

export default UploadFiles;
