import React from 'react';
import ReactPDF, { Document, Page, Text } from '@react-pdf/renderer';

const Waiver = () => {
  return (
    <Document title="honk">
      <Page style={{ padding: 40, alignItems: 'center' }}>
        <Text style={{ marginTop: 24 }}>Hello world!</Text>
      </Page>
    </Document>
  );
};

export const getPdfStream = () => {
  return ReactPDF.renderToStream(<Waiver />);
};
