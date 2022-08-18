import React, { Component } from "react";
import { Button, Input, Form } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = { minimumContribution: "", error: "", loading: false };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, error: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({ from: accounts[0] });

      Router.pushRoute("/");
    } catch (error) {
      this.setState({ error: error.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <div>
        <Layout>
          <h3>Create a new Camapign</h3>

          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Minimum contribution</label>
              <Input
                label="wei"
                labelPosition="right"
                value={this.state.minimumContribution}
                onChange={(event) => {
                  this.setState({ minimumContribution: event.target.value });
                }}
              />
            </Form.Field>
            <Button primary loading={this.state.loading}>
              Create
            </Button>
          </Form>
          <p>{this.state.error}</p>
        </Layout>
      </div>
    );
  }
}

export default CampaignNew;
