import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Grid, Row} from 'react-bootstrap';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {DashBoard} from './dashboard/DashboardContainer';
import {Menu} from './Menu';
import {hashHistory} from '../history';

class App extends Component {
    static propTypes = {
        notification: PropTypes.object,
    };

    render() {
        const {notification} = this.props;
        const NoMatch = ({location}) => (
            <div>
                <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        );

        return (
            <HashRouter>
                <Grid fluid>
                    <Menu
                        notification={notification}
                    />
                    <Row className="app-routes">
                        <Switch>
                            <Route exact  path="/dashboard" component={DashBoard} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Row>
                </Grid>
            </HashRouter>
        );
    }
}

export {App};
