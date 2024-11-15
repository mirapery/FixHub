import React from "react";
import Item from "./Item";
import { dummyItem } from "../data.js"

//tähän sit logiikka miten saadaan tietyn esineen data databasesta ajettua tohon. Nyt mennään mockidatalla


const ItemPage = () => {

        return (
            <div>
                <Item itemData={dummyItem[0]} className='bg-fh_white'/>
            </div>
        )
}

export default ItemPage;