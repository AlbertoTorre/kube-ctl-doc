Ingress
Comando Descripción
minikube addons enable ingress Activa el Ingress Controller en Minikube.
kubectl create deployment nginx --
image=nginx Crea un Deployment NGINX básico.
kubectl expose deployment nginx --port=80
--target-port=80 --name=nginx Expone el servicio como ClusterIP.
kubectl apply -f ingress.yaml Aplica el Ingress.
Modificar hosts:
<minikube ip> myapp.local
Agrega entrada al archivo hosts en
Windows.
(C:\Windows\System32\drivers\etc\)
minikube tunnel Esto crea un túnel y expone el servicio en
la red de Windows.
curl http://myapp.local
Accede al servicio mediante Ingress
usando el nombre de dominio local.
Accede también desde el navegador
kubectl delete -f ingress.yaml
kubectl delete deployment nginx
kubectl delete services nginx
Elimina recursos
Modificar hosts Regrese el archivo hosts a la normalidad
