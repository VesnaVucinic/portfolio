import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'

class Projects extends React.Component {
    
    render () {
        const data = this.props.projects
        const projectCards = this.props.projects.length > 0  
        ? 
            data.map(project => (
                    <Card key={project.id} style={{ width: '15rem'}}>
                            <Image as={Link} to={`/projects/${project.id}`} src={project.attributes.image_url} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header><strong>{project.attributes.name}</strong></Card.Header>
                                <Card.Description>
                                    Uploaded by {project.attributes.user.name}
                                </Card.Description><br/>
                            </Card.Content>
                    </Card> 
                    
            ))
        : 
            null 
        return (
            <div>
                <Card.Group style={{ justifyContent: 'center'}}>
                    {projectCards} 
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(Projects)