# nodejs-docker-demo
## Containerising for demo
Container Registry : dockerhub "nihalkaradan/nodejs-docker-demo:1.0"

1. Deploy mysql pod 
#### Use secrets in production
```bash
kubectl create -f mysql-deployment.yml
kubectl create -f mysql-service.yml
```
2. Create DB and Table

```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword

create database mydb;
use mydb;
create table shop (name VARCHAR(255), active Boolean );
```

3. Helm installation
```bash
helm install my-docker-chart nodejs-docker-helmchart/ --values nodejs-docker-helmchart/values.yaml 
```
4. verify helm-postinstall hook
```bash
kubectl run -it --rm --image=mysql:5.6 --restart=Never mysql-client -- mysql -h mysql -ppassword
use mydb;
select * from shop;
```
5. Verify installation

```bash
kubectl get pods
kubectl get svc 
kubectl get ingress
```
6. next steps refactor
