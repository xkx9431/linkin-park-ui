pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World, this is trigger by webhook'
            }
        }
        stage('Docker Build and Tag') {
            steps {
                
                    sh 'docker build -t linkin-park-ui-dev .' 
                    sh 'docker tag linkin-park-ui-dev xkx9431/linkin-park-ui-dev:latest'
                    sh 'docker tag linkin-park-ui-dev xkx9431/linkin-park-ui-dev:$BUILD_NUMBER'
            }
        }
        stage('Publish image to Docker Hub') {
            
            steps {
                withDockerRegistry([ credentialsId: "xkx-dockerhub", url: "" ]) {
                sh  'docker push xkx9431/linkin-park-ui-dev:latest'
                sh  'docker push xkx9431/linkin-park-ui-dev:$BUILD_NUMBER' 
                }
            }
        }
        stage('Run Docker container on Jenkins Agent') {
        steps {
                sh "docker run -d -p 3000:3000 xkx9431/linkin-park-ui-dev"
            }
        }
    }

}
