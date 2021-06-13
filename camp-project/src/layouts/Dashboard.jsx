import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import {Route} from "react-router";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route>

            </Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
