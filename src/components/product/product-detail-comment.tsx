import React from "react";
function getInitials(fullName: string) {
  const words = fullName.split(" ");

  if (words.length === 0) {
    return "";
  }

  const firstInitial = words[0].charAt(0).toUpperCase();

  const lastInitial = words[words.length - 1].charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
}
export default function ProductDetailComment() {
  return (
    <div>
      <ul>
        <CommentItem
          name="Chinh Bui"
          content="Ngày dùng liều lượng ra sao ạ?"
        />
        <CommentItem
          name="Thúy Lê"
          content="Đang bị đi ngoài dùng được không bác sĩ?"
        />
        <CommentItem
          name="Vẫn Thị Thanh"
          content="Loại này có dễ uống và đang ho sốt uống được không ạ?"
        />
        <CommentItem name="Trần Văn Hùng" content="Mấy tuổi dùng được ạ?" />
      </ul>
    </div>
  );
}
const CommentItem = ({ name, content }: { name: string; content: string }) => {
  return (
    <li>
      <div className="lc-comment__item relative pt-5">
        <div className="comment_comment-branch__b5nbp" />
        <div className="comment-block flex gap-[12px]">
          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
            <div className="bg-gray-400 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
              {getInitials(name)}
            </div>
          </div>
          <div className="content flex-1">
            <p className=" mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
              {name}
            </p>
            <div className="user-comment">
              <span
                className="md:text-base text-sm font-normal"
                style={{ wordBreak: "break-word" }}
              >
                {content}
              </span>
            </div>
            <div className="comment-utils mt-[8px]">
              <div className="flex items-center">
                <span className="text-gray-500 font-medium">1 tháng trước</span>
                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                <p className="flex cursor-pointer items-center">
                  <svg
                    width={16}
                    className="text-text-tertiary"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-sm text-gray-600 ml-1 font-medium">
                    Hữu ích
                  </span>
                </p>
                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                <span className="md:text-sm text-blue-600 cursor-pointer font-medium">
                  Trả lời
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <ReplyItem
          name="Nguyễn Thùy Trang"
          content={
            <>
              <p className="editor-paragraph" dir="ltr">
                <span>Chào bạn Chinh Bui,</span>
              </p>
              <p className="editor-paragraph" dir="ltr">
                <span>
                  {" "}
                  Dạ cảm ơn bạn tin tưởng và ủng hộ Ludmila. Bất cứ khi nào bạn
                  cần hỗ trợ, vui lòng liên hệ tổng đài miễn phí 0832667711 để
                  được tư vấn và đặt hàng.
                </span>
              </p>
              <p className="editor-paragraph" dir="ltr">
                <span>Nhà thuốc thông tin đến bạn</span>
                <br />
                <span>Thân mến!</span>
              </p>
            </>
          }
        />
        <ReplyItem
          name="Ngô Sĩ Thanh"
          content="Chào bạn Chinh Bui,

Dạ sản phẩm dễ sử dụng ạ, có thể dùng được trong tình trạng của bạn ạ

Nhà thuốc thông tin đến bạn
Thân mến!"
        />
        <ReplyItem
          name="Hoàng Văn Khanh"
          content={
            <>
              <p className="editor-paragraph" dir="ltr">
                <span>Chào bạn Chinh Bui,</span>
              </p>
              <p className="editor-paragraph" dir="ltr">
                <span>
                  {" "}
                  Dạ sản phẩm dễ sử dụng ạ, có thể dùng được trong tình trạng
                  của bạn ạ
                </span>
              </p>
              <p className="editor-paragraph" dir="ltr">
                <span>Nhà thuốc thông tin đến bạn</span>
                <br />
                <span>Thân mến!</span>
              </p>
            </>
          }
          last={true}
        />
      </ul>
      <ReadmoreReply />
    </li>
  );
};

const ReplyItem = ({
  last = false,
  name,
  content,
}: {
  last?: boolean;
  name: string;
  content: React.ReactNode;
}) => (
  <li>
    <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
      <div className={last ? "" : "comment_comment-branch__b5nbp"} />
      <div className="comment_reply-branch__NKquM" />
      <div className="comment-block flex gap-[12px]">
        <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
          <div className="bg-blue-600 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
            {getInitials("A D")}
          </div>
        </div>
        <div className="content flex-1">
          <p className=" mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
            {name}
            <span className="text-sm bg-blue-100 text-blue-600 md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
              Admin
            </span>
          </p>
          <div className="user-comment">
            <span
              className="md:text-label1 text-label2 font-normal"
              style={{ wordBreak: "break-word" }}
            >
              {content}
            </span>
          </div>
          <div className="comment-utils mt-[8px]">
            <div className="flex items-center">
              <span className="text-gray-500  font-medium">1 tháng trước</span>
              <div className="bullet-dot  mx-[8px] h-[4px] w-[4px] rounded-full" />
              <p className="flex cursor-pointer items-center">
                <svg
                  width={16}
                  className="text-gray-600"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-sm text-gray-500 ml-1 font-medium">
                  Hữu ích
                </span>
              </p>
              <div className="bullet-dot  mx-[8px] h-[4px] w-[4px] rounded-full" />
              <span className="text-sm text-blue-600 cursor-pointer font-medium">
                Trả lời
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
);

const ReadmoreReply = () => (
  <div className="ml-[30px] mt-3 py-2 px-3 pl-16 md:ml-[50px]">
    <div className="inline-flex cursor-pointer items-center justify-center text-gray-600">
      <svg
        width={20}
        height={20}
        className=" mr-1"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
          fill="currentColor"
        />
      </svg>
      <span className="text-sm font-medium">Xem thêm 2 bình luận</span>
    </div>
  </div>
);
