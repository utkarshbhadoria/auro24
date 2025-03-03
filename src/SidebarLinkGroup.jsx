import React,{useState} from 'react'

function SidebarLinkGroup({children,activeCondition}) {
    const [open, setOpen] = useState(activeCondition);

    //console.log(open);
  const handleClick = () => {
    setOpen(!open);
  }
  return (
    <ul>
       {children(handleClick,open)}
    </ul>
  )
}

export default SidebarLinkGroup