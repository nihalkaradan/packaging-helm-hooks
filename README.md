# nodejs-docker-demo
## Containerising for demo
Container Registry : dockerhub "nihalkaradan/nodejs-docker-demo:1.0"

1. Helm based installation
```bash
helm install my-docker-chart nodejs-docker-helmchart/ --values nodejs-docker-helmchart/values.yaml 
```
2. Kubectl commands
```bash
kubectl create -f deployment.yml
kubectl create -f service.yml
```
