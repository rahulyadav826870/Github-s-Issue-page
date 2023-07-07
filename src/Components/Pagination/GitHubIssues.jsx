import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoIssueOpened } from "react-icons/go";
import { BsCheck } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { TimeAgo } from "./TimeAgo";
import { BiComment } from "react-icons/bi";
import "./github.css";

function GitHubIssues() {
  // State variables
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  // const [perPage, setPerPage] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  const [totalDataLength, setTotalDataLength] = useState(0);
  const [finallength, setFinalLength] = useState(0);
  const [pull, setPullData] = useState(0);

  let url = "https://api.github.com/repos/apple/cups";

  const pullFun = async () => {
    let response = await axios.get(`${url}/pulls`);
    let res = await response.data.length;
    setPullData(res);
    // console.log("res.created_at: ", res.user.login);
  };
  // Fetch data from GitHub API
  const lastDataPrint = async (page, data) => {
    // console.log("page: ", page);
    const response = await axios.get(
      `${url}/issues?state=open&is:issue&page=${page}`
    );
    console.log("response.data: ", response.data);
    console.log("data: ", data);
    setFinalLength(response.data.length + data);
  };
  useEffect(() => {
    pullFun();
    const fetchIssues = async () => {
      try {
        const response = await axios.get(
          `${url}/issues?state=open&is:issue&page=${page}`
        );
        // console.log("response.data: ", response.data);
        setIssues(response.data);

        // Extract total pages from the response headers
        const linkHeader = response.headers.link;

        console.log("linkHeader: ", linkHeader);
        if (linkHeader) {
          const regex = /page=(\d+)>; rel="last"/;
          const match = regex.exec(linkHeader);
          console.log("match: ", match);
          if (match) {
            const lastPage = parseInt(match[1]);
            // console.log("lastPage: ", lastPage);

            let mul = (lastPage - 1) * response.data.length;
            console.log("mul: ", mul);
            lastDataPrint(lastPage, mul);
            setTotalPages(lastPage);
            setTotalDataLength(lastPage * response.data.length);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIssues();
  }, [page]);

  // Generate an array of page numbers for rendering pagination buttons
  const getPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (page <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (page >= totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = page - 1; i <= page + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="py-8 bg-[#0d1117] sm:px-5">
      {/* Render issues */}

      <div
        className="border-y  border-[#30363d] rounded-none sm:border ParentDiv bg-[#161b22] text-slate-100 w-[100%] sm:w-[98%] m-auto sm:rounded-t-md"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="flex font-semibold  items-center firstDiv gap-x-3"
          style={{ margin: "2% 2%" }}
        >
          <span className="text-slate-100 ">
            <GoIssueOpened size={20} />
          </span>
          <p>{finallength - pull} Open</p>
          <span className="ml-[10px]">
            <BsCheck color="#6d848f" size={20} />
          </span>
          <span className="text-[#6d848f] text-[14px]">

          5,738 Closed
          </span>
        </div>

        <div
          className="flex px-2 overflow-auto secondDiv gap-x-5"
          style={{ margin: "2% 2%" }}
        >
          <p className="flex items-center text-[#6d848f] text-[14px]">
            Author <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Label <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Projects <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Milestoens <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center  text-[#6d848f] text-[14px]">
            Assignee <MdArrowDropDown size={20} />
          </p>
          <p className="flex items-center text-[#6d848f] text-[14px] ">
            Sort <MdArrowDropDown size={20} />
          </p>
        </div>
      </div>

      {/* data Map here  */}
      <div className=" mapContaner w-[100%] sm:w-[98%]">
        {issues.length > 0 &&
          issues.map((el, ind) => {
            ind = ind + 1;
            return (
              <div
                key={el.id}
                className={`border-[#30363d]  border-y px-2 sm:border cursor-pointer hover:bg-[#161b22] group flex  sm:px-6  py-1 sm:py-5 items-center gap-x-4 ${
                  ind % 30 === 0 ? "sm:rounded-b-md" : "rounded-none"
                }`}
              >
                <span className="text-green-500">
                  <GoIssueOpened size={20} />
                </span>

                <div className="flex flex-col gap-y-2 ">
                  <p className="group-hover:text-[#1f6feb] break-words text-sm sm:text-lg font-semibold">
                    {el.title}
                  </p>
                  <div className="flex  sm:text-sm break-words  gap-x-1   sm:flex-row text-[#6d848f] text-[10px]">
                    #{el.number} <p>opened</p> <TimeAgo time={el.created_at} />{" "}
                    <p className=""> by</p>{" "}
                    <span className="break-words userDetails">
                      {el.user.login}
                    </span>
                    {el.comments > 0 && (
                      <span className="flex items-center gap-1 mx-3 ">
                        {" "}
                        <BiComment size={20} /> <span>{el.comments}</span>{" "}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      {/* Pagination controls */}

      <div className="pagination-container">
        <button
          className={`pagination-text ${page === 1 ? "gray" : "light-blue"}`}
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={page === 1}
        >
          {"<"} Previous
        </button>

        {getPageNumbers().map((pageNumber, index) => (
          <button
            key={index}
            className={`pagination-button  hidden sm:block ${
              pageNumber === page ? "blue" : "light-blue"
            }`}
            onClick={() => {
              if (typeof pageNumber === "number") {
                setPage(pageNumber);
              }
            }}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        ))}

        <button
          className={` pagination-text ${
            page === totalPages ? "gray" : "light-blue"
          }`}
          onClick={() =>
            setPage((prevPage) => Math.min(prevPage + 1, totalPages))
          }
          disabled={page === totalPages}
        >
          Next {">"}
        </button>
      </div>
    </div>
  );
}

export default GitHubIssues;
