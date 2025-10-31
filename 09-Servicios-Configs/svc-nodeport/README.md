# Comandos útiles para trabajar con un Service en Kubernetes

| Comando | Descripción |
|---------|-------------|
| `kubectl apply -f nginxdeployment.yaml` | **(Pre-requisito)** Crear el *Deployment* al que se conectará el servicio |
| `kubectl apply -f nginx-service.yaml` | Crear el servicio desde un manifiesto |
| `kubectl describe service nginxservice` | Ver los detalles del servicio (selector, puertos, endpoints) |
| `kubectl get service` | Confirmar los puertos y el tipo (*NodePort*, *ClusterIP*, etc.) |
| `minikube service list` | Consultar los servicios disponibles en **minikube** |
| `minikube service nginx-service` | Acceder al servicio desde el host |
| `kubectl delete -f nginx-service.yaml` <br> `kubectl delete -f nginxdeployment.yaml` | Eliminar el servicio y el deployment |