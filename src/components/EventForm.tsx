import { Button, DatePicker, Form, Input, Row, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import dayjs from 'dayjs';
import React, { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { rules } from '../utils/rules';

interface EventFormProps {
   guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {

  const [event, setEvent] = useState<IEvent>({
      author: '',
      date: '',
      description: '',
      guest: '',
  } as IEvent); 

   const selectDate = (date: dayjs.Dayjs | null) => {
   console.log(date)
  }

  return (
    <Form>
      <Form.Item
         label="Text event"
         name="description"
         rules={[rules.required()]}
      >
         <Input
            value={event.description}
            onChange={e => setEvent({...event, description: e.target.value})}
         />
      </Form.Item>

      <Form.Item
         label="Date event"
         name="guest"
         rules={[rules.required()]}
      >
         <DatePicker 
             onChange={(date) => selectDate(date) }

         />
      </Form.Item>
      
      {/* <Form.Item>
         <Select
         options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
         ]}
         />
      </Form.Item> */}

      <Form.Item
               label="User event"
               name="date"
               rules={[rules.required()]}>
         <Select 
            onChange={(guest: string) => setEvent({...event, guest})}
        
         >
            {props.guests.map(guest => 
               <Select.Option value={guest.username} key={guest.username}>
                   {guest.username}
               </Select.Option>
            )}
         </Select>
      </Form.Item>
      
      <Row justify="end">
      <Form.Item>
         <Button type="primary" htmlType="submit">
             Submit
         </Button>
      </Form.Item>
      </Row>

    </Form>
  )
}

export default EventForm;