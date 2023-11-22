import * as React from 'react';
import Link from "next/link"
const NoticeCard = ({noticeLink, notice_name}) => {
    return (
        <Link className='flex rounded-lg text-white transition items-center justify-center w-full m-1 md:w-[20%] text-sm md:text-base bg-sky-500 hover:bg-sky-700 p-3 text-center' target="_blank" href={noticeLink} >
               {notice_name}
        </Link>
    )
}

export default NoticeCard