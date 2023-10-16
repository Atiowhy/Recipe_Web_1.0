import React, { useEffect, useState } from 'react';
import { getMenuDetail, updateMenu } from '../../redux/actions/menu';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

const UpdateData = () => {
  const { menuId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.DetailMenu);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    title: '',
    ingredients: '',
    category_id: '1',
    image_url: '',
  });

  useEffect(() => {
    console.log(menuId);
    dispatch(getMenuDetail(menuId));
  }, []);

  useEffect(() => {
    data &&
      setInputData(
        {
          ...inputData,
          title: data.title,
          image_url: data.data.image,
          ingredients: data.ingredients,
          category_id: data.category_id,
        },
        [data]
      );
  });

  const postData = (event) => {
    event.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append('title', inputData.title);
    bodyFormData.append('ingredients', inputData.ingredients);
    bodyFormData.append('category_id', inputData.category_id);
    bodyFormData.append('image', photo);
    console.log(bodyFormData);
    dispatch(updateMenu(bodyFormData, menuId, navigate));
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const onChangePhoto = (e) => {
    setPhoto(e.target.files[0]);
    e.target.files[0] &&
      setInputData({
        ...inputData,
        image_url: URL.createObjectURL(e.target.files[0]),
      });
  };

  //sungguh nyata kasih mu di sepanjang hidupku dengan darah mu kau tebus dosa ku sungguh nyata kasih mu di sepnjang hidupku segenap hati ku hanya untuk mu di sepanjang hidupku sungguh nyata kasih mu di sepanjang hidup ku segenap hati ku hanya untuk meu segenap hatiku hanya untuk mu kau terindah di dalam hidupku kasih mu sempurna dan pengorbanan mu besar allah yang perkasa dia bapa yang kekal gunung batu keslamatan ku engkau yang termulia di bumi di surga termasyur perkasa selamanya engkau yang berkusa di dalam sgala hal ada kuasa dalam nama yesus ku nama yang perkasa dia bapa yang kekal gunung batu keslamatanku

  return (
    <>
      <div className="container mt-5">
        <form onSubmit={postData}>
          <div
            className="mb-3 border border-1 rounded mt-5 w-100"
            style={{ height: '300px', background: 'rgba(246, 245, 244, 1)' }}
          >
            <label className="btn d-flex h-100 justify-content-center align-items-center btn-lg text-muted ">
              Upload
              <input
                type="file"
                name="image"
                onChange={onChangePhoto}
                className="form-control"
                style={{ display: 'none' }}
              />
              <img src={inputData.image_url} width={400} />
            </label>
          </div>
          <div className="mb-3 title-form">
            <input
              type="text"
              name="title"
              value={inputData.title}
              onChange={onChange}
              className="form-control title"
              placeholder="Title"
              style={{ height: '50px', background: 'rgba(246, 245, 244, 1)' }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="ingredients"
              value={inputData.ingredients}
              onChange={onChange}
              className="form-control ingredients"
              placeholder="Ingredients"
              style={{ height: '250px', background: 'rgba(246, 245, 244, 1)' }}
            />
          </div>
          <div className="dropdown">
            <button
              className="btn list btn-secondary dropdown-toggle text-muted"
              style={{ background: 'rgba(246, 245, 244, 1)' }}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Main Course
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Dessert
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Appetizier
                </a>
              </li>
            </ul>
          </div>
          <div className="post text-center mt-4">
            <button
              type="submit"
              className="btn fs-5 btn-warning text-white w-50"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateData;
