import React, { useEffect, useState } from "react";
import Layout from "./Layout";

function Department() {
  useEffect(() => {}, []);

  return (
    <Layout>
      <div>
        <div className="card card-secondary">
          <div className="card-header">
            <h3 className="card-title mb-0">
              <i className="fa fa-user pr-2" />
              Department Details
            </h3>
          </div>
          <div className="card-body"></div>
          <div className="card-footer"></div>
        </div>
      </div>
    </Layout>
  );
}
export default Department;
