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
  Toolbar
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";
import Header from "../components/Header"

const Employees = () => {
  const pageOptions = {pageSize:10}
  const toolbarOptions = ['Search']
  const searchOptinos =  {
    ignoreCase: true,
    operator: 'contains'
  };
  return (
    <div>
      <Header title="Employess" category="page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowMultiSorting
        searchSettings={searchOptinos}
        toolbar={toolbarOptions}
        pageSettings={pageOptions}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Page,
            Edit,
            Sort,
            Toolbar
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
