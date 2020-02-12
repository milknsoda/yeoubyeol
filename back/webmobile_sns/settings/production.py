from .base import *
from decouple import config

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['*']

# use this when mysql is the basic db
DATABASES = { 
    'default': {
        'ENGINE': 'django.db.backends.mysql', # mysql 엔진 설정
        'NAME':'yeoubyeol', # 데이터베이스 이름
        'USER':'root', # 데이터베이스 연결시 사용할 유저 이름
        'PASSWORD': config('DB_PW'), # 유저 패스워드
        'HOST':'127.0.0.1',
        'PORT':'',
        'OPTIONS': {
            'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
            'charset': 'utf8mb4',
            'use_unicode': True,
        },
    }
}

SOCIAL_AUTH_RAISE_EXCEPTIONS = True
SOCIAL_AUTH_URL_NAMESPACE = 'social'
SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = config('GOOGLE_AUTH_KEY')
SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = config('GOOGLE_AUTH_SECRET')

# setting for sending email
EMAIL_BACKEND = 'django_smtp_ssl.SSLEmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = 'yeoubyeol.sns@gmail.com'
EMAIL_HOST_PASSWORD = config('EMAIL_PW'),
EMAIL_PORT = '465'
EMAIL_USE_TLS = True
DEFAULT_FROM_EMAIL = EMAIL_HOST_USER
