// write your CatList component here

import React, { Component } from 'react';


class CatList extends Component {

    render() {
        const renderCats = this.props.catPics.map((pic) => <img key={pic.id} src={pic.url} alt={pic.id}></img>)
        return (
            <div>
                {renderCats}
            </div>
        )
    }


}


export default CatList