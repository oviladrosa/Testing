pipeline {
  agent none
  environment {
        CI = 'true' 
    }
  stages {
    stage('Build') {
       agent {
          docker {
            image 'node:10-alpine'
          }
      }
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
        agent {
          docker {
            image 'node:10-alpine'
          }
        }
      steps {
        echo 'Starting API tests'
      }
    }
    stage('Sonarqube') {
      agent {
        docker {
          image 'gradle:latest' 
        }
      }
        environment {
            scannerHome = tool 'SonarQubeScanner'
        }
        steps {
           
            withSonarQubeEnv('sonarqube') {
                sh "${scannerHome}/bin/sonar-scanner"
            }
           
        }
    }
  }
}
