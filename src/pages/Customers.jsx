import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Edit,
  Search,
  Page,
  Inject,
  Sort,
  Toolbar,
  Selection,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import Header from "../components/Header";

const Customers = () => {
  const pageOptions = { pageSize: 10 };
  const toolbarOptions = ["Delete"];
  const editOptions = { allowEdition: true, allowDeleting: true };

  return (
    <div>
      <Header title="Customers" category="page" />
      <GridComponent
        dataSource={customersData}
        allowEditing
        allowPaging
        allowSorting
        allowMultiSorting
        toolbar={toolbarOptions}
        editSettings={editOptions}
        pageSettings={pageOptions}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Search, Page, Edit, Sort, Toolbar, Selection, Filter]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
