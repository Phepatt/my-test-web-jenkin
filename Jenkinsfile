pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                // Clone from your GitHub repo + main branch
                git branch: 'main',
                    url: 'https://github.com/Phepatt/my-test-web-jenkin.git'
            }
        }

        stage('Install dependencies') {
            steps {
                // Windows agent: use `bat`
                bat 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Optional run app') {
            when {
                expression { false } // change to true if you want Jenkins to actually run the app
            }
            steps {
                bat 'npm start'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        failure {
            echo 'Pipeline failed.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
    }
}



