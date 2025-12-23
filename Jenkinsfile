pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Run (optional)') {
            when {
                expression { return false } // change to true if you want to run the app in Jenkins
            }
            steps {
                sh 'npm start'
            }
        }
    }
}


