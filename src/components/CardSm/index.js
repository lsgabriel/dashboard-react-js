import React from "react";
import { Card } from "./styles";

const CardSm = () =>{
    return(
        <Card className="m-1">
            <h1>Title</h1>
            <p className="text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus libero at leo pulvinar ipsum.</p>
        </Card>
    );
}

export default CardSm;