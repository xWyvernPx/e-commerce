import React from 'react'

function CustomerCard(props) {
    const {data} = props;
   if(data)
    return (
          <div className="comment__card">
            <p className="comment__card-content">
                {`"${data.content}"`}
            </p>
            <h6 className="comment__card-author">{ data.username}</h6>
            {/* <img src="/static/img/mockup ava round.png" alt="" class="comment__card-ava"/> */}
        </div>
    )
    else return <></>
}

export default CustomerCard
