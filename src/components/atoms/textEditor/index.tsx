/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import React, { useEffect, useState, useRef } from 'react';
import Text from '../commonText';
import JoditEditor from 'jodit-react';

interface PropsTypes {
  onChange: (value: string) => void;
  value: string;
}

function RichTextEditor({ onChange, value }: PropsTypes) {
  const [isClient, setIsClient] = useState(false);
  const editorRef = useRef<any>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && editorRef.current) {
      const editor = editorRef.current.editor as any;
      editor?.isReady.then(() => {});
    }
  }, [isClient]);

  return (
    <div>
      {isClient && (
        <div className="bg-white rounded-lg shadow-lg p-3">
          <Text containerTag="h1" className="text-primary mb-3 text-lg font-semibold">
            Description
          </Text>

          <JoditEditor ref={editorRef} onChange={onChange} value={value} />
        </div>
      )}
    </div>
  );
}

export default RichTextEditor;
