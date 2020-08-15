import React, {Component} from 'react';

class Project extends Component{

    render() {
        return (
            <div id={this.props.id}>
                <div>
                    <div/>
                    <h2>{this.props.projectName}</h2>
                    <h4>{this.props.subtitle}</h4>
                    <p>{this.props.description}</p>
                    <div className="tools">
                        {this.renderTools()}
                    </div>

                </div>
            {/* must make provision for img here */}
            </div>

        );
    }

    renderTools(){
        return this.props.tools.map((item) => {
            return (
                <p key={item}> {item} </p>
            )
        });
    }
}

export default Project;
