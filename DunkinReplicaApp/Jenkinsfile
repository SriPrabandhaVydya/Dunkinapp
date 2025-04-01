pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'expo-web-app'
        DOCKER_TAG = 'latest'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Web App') {
            steps {
                sh 'npm run build:web'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test || true'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Stop existing container if running
                    sh 'docker stop expo-web-app || true'
                    sh 'docker rm expo-web-app || true'

                    // Run new container
                    sh '''
                        docker run -d \
                            --name expo-web-app \
                            -p 8084:83 \
                            -e NODE_ENV=production \
                            ${DOCKER_IMAGE}:${DOCKER_TAG}
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! App is running on port 8084'
        }
        failure {
            echo 'Pipeline failed! Check logs for details'
        }
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}