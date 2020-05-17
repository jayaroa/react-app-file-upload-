import React from 'react';
import { 
  Container, 
  Row, 
  Col,
  Form
} from 'react-bootstrap';
import DirectoryRowItem from './DirectoryRowItem';  

const DirectorySection = () => {
  return (
    <div>
      <Container>
        <DirectoryRowItem 
          title="What is Cataract Sugery And How Does It Work" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="edited 2 days ago" 
          seen="" 
          directoryRowInfo=""           
        />
        <DirectoryRowItem 
          title="Vasectomy Reversal Review" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="edited 2 days ago" 
          seen="" 
          directoryRowInfo="" 
        />
        <DirectoryRowItem 
          title="Croup An Infection Affecting The Young" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="edited 2 days ago" 
          seen="" 
          directoryRowInfo="" 
        />
        <DirectoryRowItem 
          title="How To Remove Kidney Stones" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="edited 2 days ago" 
          seen="" 
          directoryRowInfo="" 
        />
        <DirectoryRowItem 
          title="The Basic Requirements Of An Autoclave Sterilizer" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="edited 2 days ago" 
          seen="" 
          directoryRowInfo={true} 
        />
        <DirectoryRowItem 
          title="How To Quit Smoking Using Zyban" 
          dateAdded="Aug 24 at 6:26 pm" 
          lastModified="Done" 
          seen="654" 
          directoryRowInfo="" 
        />
      </Container>
    </div>
  );
};

export default DirectorySection;