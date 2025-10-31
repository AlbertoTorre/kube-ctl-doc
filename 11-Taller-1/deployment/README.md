Crear o actualizar un Deployment 
    kubectl apply -f nginx-deployment.yaml
Ver todos los Deployments 
    kubectl get deployments
Ver detalles de un Deployment 
    kubectl describe deployment nginx-deployment
Ver pods creados por el Deployment 
    kubectl get pods -l app=nginx
Escalar el Deployment 
    kubectl scale deployment nginx-deployment --replicas=5
Ver el estado del rollout 
    kubectl rollout status deployment nginxdeployment
## Cambiar la imagen de los pods 
    kubectl set image deployment nginx-deployment nginx=nginx:1.25
## Ver el historial de revisiones 
    kubectl rollout history deployment nginxdeployment
## Hacer rollback de una actualización 
    kubectl rollout undo deployment nginxdeployment
Eliminar un Deployment 
    kubectl delete -f nginx-deployment.yaml