pipeline {
  agent any
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
                timeout(time: 1, unit: 'HOURS') {
                       def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            currentBuild.result = 'UNSTABLE'
                        }  
                }
              }
            }
       post {
                success {
                    echo 'SonarQube quality gate passed'
                }
                unstable {
                    echo 'SonarQube quality gate failed'
                    echo 'Build marked as unstable'
                    script {
                        if (UNSUCCESSFUL_STAGE == 'null') {
                            UNSUCCESSFUL_STAGE = env.STAGE_NAME
                        }                        
                    }
                }
                failure {
                    echo 'Quality gate not received'
                    script {
                        UNSUCCESSFUL_STAGE = env.STAGE_NAME
                    }
                }
            }
           
        }
  }
}
