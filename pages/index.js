import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class campaignIndex extends Component {
  static async getInitialProps() {
    const camp = await factory.methods.getDeployedCampaigns().call();

    return { camp };
  }

  renderCampaign = () => {
    const items = this.props.camp.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`campaigns/${address}`}>
            <a>view Campaign!!</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  };

  render() {
    return (
      <div>
        <Layout>
          <h3>Open Campaigns</h3>
          <Link route="campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add"
                primary
              />
            </a>
          </Link>
          {this.renderCampaign()}
        </Layout>
      </div>
    );
  }
}

export default campaignIndex;
