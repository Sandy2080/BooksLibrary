import React from "react";
import { Text } from "../../atoms/text";

export const Alert = ({ children }) => (
    <div class="alert alert-info alert-dismissible fade show" role="alert">
        <Text.SEMIBOLD fontSize="20" className="text-center">{ children }</Text.SEMIBOLD> 
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)