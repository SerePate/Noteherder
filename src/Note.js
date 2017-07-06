import React from 'react'


const Note=(props)=>{
    const handleClick = ()=>{

    }
    return(
        // <a className="active">
        //     <li>
        //         <div className="note">
        //           <div className="note-title">
        //             Kohlrabi welsh
        //           </div>
        //           <div className="note-body">
        //             <p>
        //               Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        //             </p>
        //           </div>
        //         </div>
        //     </li>
        // </a>

        <a onClick={handleClick}>
            <li>
                <div className="note">
                  <div className="note-title">
                    {props.note.title}
                  </div>
                  <div className="note-body">
                    <p>
                        {props.note.body}
                    </p>
                  </div>
                </div>
            </li>
        </a>

        // <a>
        //     <li>
        //         <div className="note">
        //           <div className="note-title">
        //             Prairie turnip
        //           </div>
        //           <div className="note-body">
        //             <p>
        //               Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
        //             </p>
        //           </div>
        //         </div>
        //     </li>
        // </a>
    )
}

export default Note