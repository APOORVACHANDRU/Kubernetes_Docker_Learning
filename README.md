# Kubernetes_Docker_Learning

 $docker ps
 $docker images
 $docker tag node-app:1.0 apoorva0811/node-app:1.0

 $docker login
Authenticating with existing credentials...
Login Succeeded

$docker push apoorva0811/node-app:1.0
The push refers to repository [docker.io/apoorva0811/node-app]
f352bc07f19b: Pushed
47be83a79857: Pushed
1.0: digest: sha256:3fccf0347ef7c11310af377a1832ff37b27c56c45a511b1653cb65d528aabd14 size: 856


 $docker pull apoorva0811/node-app:1.0
1.0: Pulling from apoorva0811/node-app
Digest: sha256:3fccf0347ef7c11310af377a1832ff37b27c56c45a511b1653cb65d528aabd14
Status: Image is up to date for apoorva0811/node-app:1.0
docker.io/apoorva0811/node-app:1.0



-----------------------------


 $kubectl apply -f mongo-secret.yaml
 $kubectl apply -f mongo-config.yaml
  $kubectl apply -f mongo.yaml
   $kubectl apply -f webapp.yaml

    $kubectl get all


     $kubectl describe pod webapp-deployment-5bb5445564-64z9z

     $kubectl get node -o wide
     NAME       STATUS   ROLES           AGE   VERSION   INTERNAL-IP    EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION                       CONTAINER-RUNTIME
minikube   Ready    control-plane   23h   v1.31.0   192.168.49.2   <none>        Ubuntu 22.04.4 LTS   5.15.153.1-microsoft-standard-WSL2   docker://27.2.0


     $minikube start --driver docker 
     $minikube start
     $minikube ip



     feature 2


