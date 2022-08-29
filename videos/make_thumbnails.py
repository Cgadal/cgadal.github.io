import os
import cv2
import glob
import numpy as np

movie_dir = './'
thumbnails_dir = 'thumbnails'
extensions = ['.mp4', '.avi']

list_video = []
for ext in extensions:
    list_video += glob.glob(os.path.join(movie_dir, '*' + ext))
    #

for video in list_video:
    thumb_path = os.path.join(thumbnails_dir, video.split(os.sep)[-1].split('.')[0] + '.jpg')
    if not os.path.isfile(thumb_path):
        cap = cv2.VideoCapture(video)
        nframe = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        i = int(0.5*nframe*np.random.random() + 0.25*nframe)
        #
        cmd = r'ffmpeg -i {} -vf "select=eq(n\,{})" -frames:v 1 {}'.format(video, i, thumb_path)
        # print(cmd)
        os.system(cmd)
