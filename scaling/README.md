Comando                                                          Descripción
--------------------------------------------------------------------------------------------------------------------------------------
minikube start --cpus=4 --memory=4096 --driver=docker            Inicia Minikube con recursos suficientes y driver docker
minikube addons enable metrics-server                            Habilita metrics-server, necesario para que HPA funcione
kubectl apply -f nginx-hpa.yaml                                  Aplica el manifiesto con Deployment (nginx + stress), Service y HPA
minikube service nginx-service                                   Accede a la aplicación nginx en el navegador
kubectl get pods -l app=nginx-stress                             Lista los pods activos del Deployment
kubectl exec -it <nombre-del-pod> -c stress-ng -- sh             Accede al contenedor stress-ng dentro del pod para lanzar carga manualmente
apk update && apk add stress-ng                                  (Dentro del contenedor) Instala la herramienta stressng en Alpine
stress-ng --cpu 1 --timeout 300                                  (Dentro del contenedor) Genera carga de CPU durante 5 minutos
kubectl get hpa -w                                               Monitorea en tiempo real si el HPA escala automáticamente
kubectl top pods                                                 Muestra uso de CPU por pod (verifica que esté generando carga)
kubectl get pods -w                                              Observa en tiempo real la creación/eliminación de pods por parte del HPA
kubectl describe hpa nginx-hpa                                   Muestra eventos y decisiones tomadas por el HPA
kubectl delete -f nginx-hpa.yaml                                 Elimina todos los recursos creados por el manifiesto (limpieza del entorno)
