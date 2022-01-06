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
    else return <div className="comment__card">
    <p className="comment__card-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis dolores saepe, fugiat voluptatem obcaecati provident? Doloribus ipsa iste nesciunt esse ipsam, earum blanditiis quod nobis.
    </p>
    <h6 className="comment__card-author">Author</h6>
    {/* <img src="/static/img/mockup ava round.png" alt="" class="comment__card-ava"/> */}
</div>
}

export default CustomerCard
