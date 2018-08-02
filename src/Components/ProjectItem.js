
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title}:</strong> {this.props.project.category} <a href="#" onClick={this.props.deleteProject.bind(this)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  deleteProject: PropTypes.func,
};

export default ProjectItem;