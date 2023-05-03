import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loader2 = ({variant}) => {
    return (
        <div>
            <Spinner
                variant={variant ? variant : "secondary"}
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Loading...
        </div>
    )
}

export default Loader2