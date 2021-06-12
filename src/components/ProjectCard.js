import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'

class ProjectCard extends Component {
    
    render() {
        const projectId = project ? project.id : null
        console.log (project)

        return (
            project ?
                    <Card style={{ width: '18rem', marginRight: 'auto', marginLeft: 'auto'}}>
                        <Image src={project.attributes.image_url} wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{project.attributes.name}</Card.Header>
                        <Card.Description>
                            Uploaded by {project.attributes.user.name}
                        </Card.Description><br/>
                        </Card.Content>
                     </Card>
                :
            <p>This the the project Card with no project!</p> 
        ) 
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}
export default connect(mapStateToProps)(ProjectCard)