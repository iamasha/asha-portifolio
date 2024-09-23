"use client";
import {Button} from '@/components/ui/button'
import {Input} from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from "@/components/ui/select"

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'
import { Description } from '@radix-ui/react-dialog';

const info = [
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"+256 757-941-028"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"hwakaasha@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Kirinya, Bweyogerere"
  },
]

import {motion} from "framer-motion"; 
import { SelectValue } from '@radix-ui/react-select';
const Contact = () => {
  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <div className='xl:h-[54%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent'>Let's work together</h3>
              <p className='text-white/60'>Please fill the form below to contact us about any services</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder="First Name"/>
                <Input type="lastname" placeholder="Last Name"/>
                <Input type="email" placeholder="Email Address"/>
                <Input type="phone" placeholder="Phone Number"/>

              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX</SelectItem>
                    <SelectItem value="ast">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className='h-[200px]' placeholder="Type your message here"/>
              <Button size="md" className="max-w-40">Send Message</Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item,index)=>{
                return<li key={index} className='flex items-center gap-6'>
                  <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1'>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    
    </motion.section>
  )
}

export default Contact