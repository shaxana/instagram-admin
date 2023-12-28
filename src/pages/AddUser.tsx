import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const AddUser: React.FC = () => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);

  return (
    <>
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
        style={{marginLeft:"500px"}}
      >
        Form disabled
      </Checkbox>
      <Form 
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 , marginLeft:"500px"}}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>I agree the Terms</Checkbox>
        </Form.Item>
        <Form.Item label="is Public">
          <Radio.Group>
            <Radio value="public"> public </Radio>
            <Radio value="private"> private </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Username">
          <Input />
        </Form.Item>
        <Form.Item label="Surname">
          <Input />
            <Select.Option value="demo">Demo</Select.Option>
          {/* </Input> */}
        </Form.Item>
        <Form.Item label="email">
          <Input />
        </Form.Item>
        <Form.Item label="password">
          <Input />
        </Form.Item>
       
        
        
       
       
        <Form.Item label="info">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="country">
          <Input />
        </Form.Item>
        {/* <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item> */}
        <Form.Item label="Post" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Submit</Button>
        </Form.Item>
        {/* <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item> */}
      </Form>
    </>
  );
};

export default () => <AddUser />;