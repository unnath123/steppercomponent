import React, { useState } from 'react'

const steppers = [
    {
        name:"page one - 1",
        component: (<div><h1>Page 1</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sequi provident veniam sit, doloremque ab quod laborum, optio voluptate perferendis voluptatum, illum nostrum explicabo? Minima est iste dignissimos odio, harum perspiciatis, velit voluptatibus odit mollitia doloribus, sapiente aspernatur nulla? Iusto minus dolorem perspiciatis corporis aliquam. Hic ipsa nemo voluptates atque!</p></div>)  
    },
    {
        name:"page two - 2",
        component: (<div><h1>Page 2</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sequi provident veniam sit, doloremque ab quod laborum, optio voluptate perferendis voluptatum, illum nostrum explicabo? Minima est iste dignissimos odio, harum perspiciatis, velit voluptatibus odit mollitia doloribus, sapiente aspernatur nulla? Iusto minus dolorem perspiciatis corporis aliquam. Hic ipsa nemo voluptates atque!</p></div>)  
    },
    {
        name:"page three - 3",
        component: (<div><h1>Page 3</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sequi provident veniam sit, doloremque ab quod laborum, optio voluptate perferendis voluptatum, illum nostrum explicabo? Minima est iste dignissimos odio, harum perspiciatis, velit voluptatibus odit mollitia doloribus, sapiente aspernatur nulla? Iusto minus dolorem perspiciatis corporis aliquam. Hic ipsa nemo voluptates atque!</p></div>)  
    },
    {
        name:"page four - 4",
        component: (<div><h1>Page 4</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sequi provident veniam sit, doloremque ab quod laborum, optio voluptate perferendis voluptatum, illum nostrum explicabo? Minima est iste dignissimos odio, harum perspiciatis, velit voluptatibus odit mollitia doloribus, sapiente aspernatur nulla? Iusto minus dolorem perspiciatis corporis aliquam. Hic ipsa nemo voluptates atque!</p></div>)  
    }
]

const StepperComponent = () => {
    const [currentPage, setCurrentPage] = useState(0);

    function handleNext(){
        setCurrentPage(currentPage+1)
    }

    function CalculateWidth(){
        const width = (currentPage / 3)*100;
        return width
    }

  return (
    <>
    <div className='container'>
        <div className="steppers">
            {
                steppers.map((step, index)=>(
                    <div className='step'>
                        <div  className={currentPage > index ? "active" : (currentPage === index ? "number":"not-active")} >{index}</div>
                        <div>{step.name}</div>
                    </div>
                ))
            }
        </div>
        <div className='progress-container'>
            <div className='progress-bar' style={{width:`${CalculateWidth()}%`}}>

            </div>
        </div>
    </div>
    <div className="component-container">
        {
          steppers.map((step, index)=>(
            index === currentPage ? (<div>
             {step.component}
            </div>) : <div></div>
          ))  
        }
    </div>

      

    <button onClick={handleNext}>next</button>
    </>
  )
}

export default StepperComponent