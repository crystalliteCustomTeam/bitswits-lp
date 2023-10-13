import React, { useEffect, useState } from 'react';
import Instagram from 'instagram-node';
import styles from '@/styles/Instagram.module.css'

const Instagram = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchInstagramPhotos = async () => {
      const instagram = new Instagram({
        clientId: 'fcad615174e744bfb7fceec69c6e9fe8',
        clientSecret: 'YOUR_CLIENT_SECRET',
        redirectUri: 'YOUR_REDIRECT_URI',
        accessToken: '3891752732.fcad615.660e74f3071640cdb893bbb3c1b0bce2',
      });

      const response = await instagram.userSelfMediaRecent();
      const photosData = response.data;

      setPhotos(photosData);
    };

    fetchInstagramPhotos();
  }, []);

  return (
    <div>
      {photos.map((photo) => (
        <img key={photo.id} src={photo.images.standard_resolution.url} alt="Instagram" />
      ))}
    </div>
  );
};

export default Instagram;
