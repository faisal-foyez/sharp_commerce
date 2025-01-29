import { Meta, StoryObj } from '@storybook/react';
import { 
  Upload,
  UploadBody,
  UploadIcon,
  UploadText,
  UploadFooter
 } from '../index';
import { withThemeDecorator } from '../../../utils/storybook/withThemeDecorator';
import { useState } from 'react';
import { Trash, Info } from '@dsc/phosphor_icons';
import { useCallback } from 'react';
import FolderIcon from '../../../../assets/images/folder.svg';


const meta: Meta<typeof Upload> = {
  title: 'Components/Molecules/Upload',
  component: Upload,
  tags: ['autodocs'],
  decorators: [withThemeDecorator],
};

export default meta;

type Story = StoryObj<typeof Upload>;

const renderUpload = (args: any) => {
  const [files, setFiles] = useState<any>([])
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload {...args} options={{ onDrop }}>
      <UploadBody>
        <UploadIcon>
          <img src={FolderIcon} alt="folder" style={{width: '28px', height: '28px'}} />
        </UploadIcon>
        <UploadText>
          <p style={{fontSize: '14px', fontWeight: '500', color: '#1A1A1A'}}>Drag & Drop or Choose File to Upload</p>
          <p style={{fontSize: '12px', fontWeight: '400', color: '#666666'}}>
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </p>
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p style={{margin: '10px 0', display:'flex', alignItems:'center', gap:'4px'}}>
          <Info size={16} />
          Uploaded Files
        </p>
        <ul style={{margin: '10px 0', display:'flex', flexDirection:'column', gap:'10px'}}>
          {files?.map((file: any) => (
            <li
              key={file?.name}
              style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderLeft:'4px solid #E0E0E0', backgroundColor:'#F5F5F5', padding:'10px 20px', textAlign:'left', fontSize:'14px', fontWeight:'400', color:'#1A1A1A', borderLeftColor:'#E0E0E0'}}>
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
  )
}

export const Default: Story = {
  args: {},
  render: (args) => {
    const [files, setFiles] = useState<any>([])
    const onDrop = useCallback((acceptedFiles: any) => {
      setFiles(acceptedFiles)
    }, [])
    return (
    <Upload options={{ onDrop }}>
      <UploadBody>
        <UploadIcon>
          <img src={FolderIcon} alt="folder" style={{width: '28px', height: '28px'}} />
        </UploadIcon>
        <UploadText>
          <p style={{fontSize: '14px', fontWeight: '500', color: '#1A1A1A'}}>Drag & Drop or Choose File to Upload</p>
          <p style={{fontSize: '12px', fontWeight: '400', color: '#666666'}}>
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </p>
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p style={{margin: '10px 0', display:'flex', alignItems:'center', gap:'4px'}}>
          <Info size={16} />
          Uploaded Files
        </p>
        <ul style={{margin: '10px 0', display:'flex', flexDirection:'column', gap:'10px'}}>
          {files?.map((file: any) => (
            <li
              key={file?.name}
              style={{display:'flex', alignItems:'center', justifyContent:'space-between', borderLeft:'4px solid #E0E0E0', backgroundColor:'#F5F5F5', padding:'10px 20px', textAlign:'left', fontSize:'14px', fontWeight:'400', color:'#1A1A1A', borderLeftColor:'#E0E0E0'}}>
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
    );
  },
}

export const HorizontalUpload: Story = {
  args: {
    horizontal: true,
  },
  render: (args) => {
    return renderUpload(args);
  },
}