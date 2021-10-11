
import React from "react";
import {FormControl,Button,Form} from "react-bootstrap";

const SearchPage = () => {
  return (
    
   
        <Form inline>
           <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form>
    
    
  );
}

export default SearchPage;