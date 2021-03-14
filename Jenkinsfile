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
          image 'sonarsource/sonar-scanner-cli' 
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
     stage('Quality Gate') {
            steps {
              script {
                sleep(40)
                timeout(time: 1, unit: 'HOURS') {
                      waitForQualityGate abortPipeline: true    
                }
              }
            }
           
        }
  }
}
