import React, { Component } from 'react';
import Item from 'components/profileItem/ProfileItem'


class List extends Component {
    render() {
        return (
            <div className="collection-list">
                   {
                       this.props.list.map((value,index)=>{
                            return(<Item item={value} key={value.blog.bolgId}></Item>)
                       })
                   }
            </div>
        );
    }
}

export default List;