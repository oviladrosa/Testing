pipeline {
  agent {
    docker {
      image 'node:10-alpine'
    }
  }
  stages {
    stage('Build') {
      steps {
         echo 'Starting building test docker image'
         sh 'npm install'
      }
      post {
        success {
          echo 'Image successfully build'
        }
        failure {
          echo 'Failed to build image'
        }
      }
    }
    stage('Test') {
      steps {
        echo 'Starting API tests'
      }
    }
    stage('Sonarqube') {
        environment {
            scannerHome = tool 'SonarQubeScanner'
        }
        steps {
            withSonarQubeEnv('SonarQubeScanner') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
            timeout(time: 10, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
        }
    }
  }
}
