"use client"

type StyleType = {
    style: string,
};

const Btn = ({style}: StyleType) => {
  return (
    <button type="button" className={style}>Add</button>
  )
}

export default Btn